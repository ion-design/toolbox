// ion/Tabs: Generated with Ion on 1/18/2024, 3:28:39 PM
'use client';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cva } from 'class-variance-authority';
import clsx from 'clsx';
import * as React from 'react';

const Tabs = TabsPrimitive.Root;

type TabType = 'filled' | 'simple';

const TabTypeContext = React.createContext<TabType>('simple');

const TabsList = React.forwardRef<
	React.ElementRef<typeof TabsPrimitive.List>,
	React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> & {
		type?: TabType;
	}
>(({ className, type = 'filled', children, ...props }, ref) => (
	<TabTypeContext.Provider value={type}>
		<TabsPrimitive.List
			ref={ref}
			className={clsx(
				'relative flex items-start',
				{
					'gap-2 rounded-radius-md bg-soft p-1': type === 'filled',
					'gap-6': type === 'simple',
				},
				className
			)}
			{...props}
		>
			{children}
			{type === 'simple' && <div className={'absolute bottom-0 z-0 h-0.5 w-full bg-soft-stroke'} />}
		</TabsPrimitive.List>
	</TabTypeContext.Provider>
));
TabsList.displayName = TabsPrimitive.List.displayName;

const tabClassnames = cva(
	'focus-visible:secondary-focus gap-2 inline-flex items-center justify-center whitespace-nowrap text-sm font-semibold text-soft-foreground transition-all disabled:pointer-events-none ',
	{
		variants: {
			type: {
				filled: [
					'rounded-radius',
					'hover:bg-weak',
					'data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-low',
					'disabled:text-weak-foreground ',
				],
				simple: [
					'border-b-2 border-transparent',
					'transition-all data-[state=active]:z-[1]',
					'hover:text-foreground',
					'disabled:text-weak-foreground',
					'data-[state=active]:border-primary data-[state=active]:text-foreground',
				],
			},
			icon: {
				true: 'p-2.5',
				false: '',
			},
		},
		compoundVariants: [
			{
				type: ['filled'],
				icon: [false],
				className: ['px-5 py-1'],
			},
			{
				type: ['simple'],
				icon: [false],
				className: ['pb-2'],
			},
		],
	}
);
const Tab = React.forwardRef<
	React.ElementRef<typeof TabsPrimitive.Trigger>,
	React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> & {
		iconLeading?: React.ReactNode;
		iconTrailing?: React.ReactNode;
	}
>(({ className, children, iconLeading, iconTrailing, ...props }, ref) => {
	const type = React.useContext(TabTypeContext);

	return (
		<TabsPrimitive.Trigger
			ref={ref}
			className={clsx(tabClassnames({ type, icon: !children }), className)}
			{...props}
		>
			{iconLeading}
			{children}
			{iconTrailing}
		</TabsPrimitive.Trigger>
	);
});
Tab.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
	React.ElementRef<typeof TabsPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
	<TabsPrimitive.Content
		ref={ref}
		className={clsx('focus-visible:secondary-focus mt-2', className)}
		{...props}
	/>
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tab, Tabs, TabsContent, TabsList };
