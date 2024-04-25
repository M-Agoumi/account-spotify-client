import './style.css';

interface ToggleInputProps {
    label?: string
    style?: string
}

export default function ToggleInput({label = 'Remember me', style = ''}: ToggleInputProps) {
    return (
        <>
            <label className={'inline-flex items-center cursor-pointer' + (style && ' ' + style)}>
                <input type="checkbox" value="" className="sr-only peer"/>
                <div
                    className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none  peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-black after:border-black after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-500"></div>
                <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">{label}</span>
            </label>
        </>
    );
}