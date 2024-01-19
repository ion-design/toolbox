// Generated with Ion on 1/18/2024, 3:28:37 PM
// Figma Link: https://www.figma.com/file/TicTaQihCRBVF3loa5xdSO?node-id=3007:14324
import clsx from 'clsx';
type FilterPillProps = {
	text?: string,
	selected?: boolean,
	className?: string,
};

function FilterPill({ text = 'text', selected = true, className = '' }: FilterPillProps) {
	return (
		<div
			className={clsx(
				{
					'font-NotoSans flex h-fit flex-col items-center justify-center gap-1 rounded-[40px] px-4 py-2 text-sm': true,
					'bg-primary text-primary-foreground': selected,
					'bg-weak text-primary': !selected,
				},
				className
			)}
		>
			{text}
		</div>
	);
}
export default FilterPill;
