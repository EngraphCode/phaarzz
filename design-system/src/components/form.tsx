import { useId } from 'react';
import type { InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react';

const cx = (...parts: (string | false | undefined)[]) => parts.filter(Boolean).join(' ');

export interface FieldProps {
	label: ReactNode;
	hint?: ReactNode;
	error?: ReactNode;
	className?: string;
	/** Receives the generated ids so the control wires up to label and messages. */
	children: (ids: { id: string; describedBy?: string; invalid: boolean }) => ReactNode;
}
/**
 * Label + control + message wrapper.
 *
 * Owns id generation so the control is always associated with its label and
 * with any hint or error text — the part hand-rolled forms most often get
 * wrong. Pass the control as a function of the ids it needs.
 */
export function Field({ label, hint, error, className, children }: FieldProps) {
	const id = useId();
	const hintId = `${id}-hint`;
	const errorId = `${id}-error`;
	const describedBy = [hint ? hintId : null, error ? errorId : null].filter(Boolean).join(' ') || undefined;

	return (
		<div className={cx('pz-field', className)}>
			<label className="pz-field__label" htmlFor={id}>
				{label}
			</label>
			{children({ id, describedBy, invalid: Boolean(error) })}
			{hint ? (
				<span className="pz-field__hint" id={hintId}>
					{hint}
				</span>
			) : null}
			{error ? (
				<span className="pz-field__error" id={errorId} role="alert">
					{error}
				</span>
			) : null}
		</div>
	);
}

export type InputProps = InputHTMLAttributes<HTMLInputElement>;
export function Input({ className, ...rest }: InputProps) {
	return <input className={cx('pz-input', className)} {...rest} />;
}

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;
export function Textarea({ className, ...rest }: TextareaProps) {
	return <textarea className={cx('pz-textarea', className)} {...rest} />;
}

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement>;
export function Select({ className, children, ...rest }: SelectProps) {
	return (
		<select className={cx('pz-select', className)} {...rest}>
			{children}
		</select>
	);
}
