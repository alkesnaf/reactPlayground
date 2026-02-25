import { ReactNode } from "react";

interface AlertProps {
	children: ReactNode;
	onClick: () => void;
}

const Alert = ({ children, onClick }: AlertProps) => {
	return (
		<div
			className="alert alert-primary alert-dismissible fade show"
			role="alert"
		>
			{children}
			<button
				type="button"
				className="close"
				data-dismiss="alert"
				aria-label="Close"
				onClick={onClick}
			>
				<span aria-hidden="true">&times;</span>
			</button>
		</div>
	);
};

export default Alert;
