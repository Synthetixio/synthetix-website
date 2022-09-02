type LogoProps = { readonly small?: boolean };

const LogoComponent = ({ small }: LogoProps) => {
	const src = small ? '/logo-x.svg' : '/logo.svg';

	return (
		<a href="/">
			<img src={src} alt="" />
		</a>
	);
};

export default LogoComponent;
