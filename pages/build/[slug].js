import Head from 'next/head';
import jp from 'jsonpath';
import slugify from 'slugify';
import { BuildPageLayout } from 'src/components';

import PageBuilder from '../../src/components/SanityPageBuilder/_PageBuilder'
import client from '../../src/lib/sanity'

const Build = ({build, navDocs}) => {
  //console.log(build)

  //gather headings from all portable text
  const headingsQuery = jp.query(build, '$..body[?(@.style=="h1" || @.style=="h2" || @.style=="h3" || @.style=="h4" )]');
  let headings = []; 
  headingsQuery.map((heading) => (
    headings.push({
      style: heading.style,
      text: heading.children[0].text,
      slug: slugify(heading.children[0].text,{lower: true}),
    })
  )); 

  // next/prev prep work
  //const allDocsOrdered = jp.query(navDocs, '$..docs[*]');
  let allDocsOrdered = []
  navDocs.map(doc => {
    let cat = doc.title
    doc.docs.map(node => (
      allDocsOrdered.push({
        cat: cat,
        ...node,
      })
    ))
  })
 
  
  let nextDoc = null;
  let prevDoc = null;
  allDocsOrdered.map(function(doc, index, elements) {
     if (doc.slug.current === build.slug.current){
      nextDoc = elements[index+1]
      prevDoc = elements[index-1]
     }
  });
  
  return (
	<>
	<Head>
		<title>Synthetix - Build</title>
	</Head>
	<BuildPageLayout headings={headings} navDocs={navDocs} nextDoc={nextDoc} prevDoc={prevDoc} updatedAt={build._updatedAt}>
		
		  <PageBuilder pageBuilder={build.pageBuilder} />

	
	</BuildPageLayout>
</>
  )
}

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "build" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug) => ({params: {slug}})),
    fallback: false,
  }
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params
  const build = await client.fetch(`
    *[_type == "build" && slug.current == $slug]
    {
	slug,
	title,
	"category": category->title,
	"categorySlug": category->slug,
	pageBuilder,
  _updatedAt,
      }[0]
  `, { slug })

  const navDocs = await client.fetch(`
  *[_type == "buildCategory"]|order(orderRank){
    title,
    'docs': *[_type=='build' && references(^._id)]|order(orderRank){ title, slug }
  }
  `)
  return {
    props: {
      build,
      navDocs,
    },
  }
}

export default Build