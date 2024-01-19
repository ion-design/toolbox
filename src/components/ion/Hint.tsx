// ion/Hint: Generated with Ion on 1/18/2024, 3:28:38 PM
import clsx from 'clsx';
import { InfoIcon } from 'lucide-react';

interface HintProps extends React.HTMLAttributes<HTMLDivElement> {
	showIcon?: boolean;
	error?: boolean;
	disabled?: boolean;
}

function Hint({ className, children, error, showIcon, disabled, ...props }: HintProps) {
	return (
		<p
			className={clsx(
				'flex items-center gap-2.5 text-xs',
				{
					'text-danger': error,
					'text-sub-foreground': !error,
					'text-weak-foreground': disabled,
				},
				className
			)}
			{...props}
		>
			{showIcon && <InfoIcon className="h-4 w-4" />}
			{children}
		</p>
	);
}

export default Hint;
