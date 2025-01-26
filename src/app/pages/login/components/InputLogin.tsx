import React from 'react';
interface IInputLoginProps {
    label: string;
    value: string;

    onChange: (newValue: string) => void;
    onPressEnter?: () => void;
    type?: string;
}

export const InputLogin = React.forwardRef<HTMLInputElement, IInputLoginProps>((props,ref) => {


    return (
        <label>
            <span>{props.label}</span>
            <input
                ref={ref}
                value={props.value}
                type={props.type}
                onChange={(e) => props.onChange(e.target.value)}
                placeholder="Digite seu email"
                onKeyDown={e => e.key === 'Enter'
                    ? props.onPressEnter() && props.onPressEnter()
                    : undefined
                }
            />
        </label>
    )
});