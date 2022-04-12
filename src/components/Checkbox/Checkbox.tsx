import styled from 'styled-components';

export interface CheckboxProps {
	label?: string | React.ReactNode;
	onChange: (checked: boolean) => void;
	checked: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({ label, onChange, checked, ...props }) => {
	return (
		<StyledCheckbox checked={checked} onClick={() => onChange(!checked)}>
			<div className="checkbox">{<img src="/check.svg" alt="✔" width={12.5} />}</div>
			<label>{label}</label>
		</StyledCheckbox>
	);
};

type StyledCheckboxProps = {
	readonly checked?: boolean;
};

const StyledCheckbox = styled.div<StyledCheckboxProps>`
	display: inline-flex;
	align-items: center;
	cursor: pointer;
	.checkbox {
		background: #10104e;
		border: 1px solid #16166a;
		box-sizing: border-box;
		border-radius: 1px;
		width: 25px;
		height: 25px;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		margin-right: 8px;
		img {
			position: absolute;
			display: ${(props) => (props.checked ? '' : 'none')};
		}
	}
	label {
		font-family: GT America;
		font-weight: 700;
		font-size: 12px;
		color: #ffffff;
		cursor: pointer;
	}
`;
