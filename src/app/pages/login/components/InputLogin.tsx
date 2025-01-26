
interface IInputLoginProps {
    label: string;
    value: string;

    onChange: (newValue: string) => void;
    onPressEnter?: () => void;
    type?:string;
}

export const InputLogin: React.FC<IInputLoginProps> = (props) => {


    return (
        <label>
            <span>{props.label}</span>
            <input
                type="email"
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
}