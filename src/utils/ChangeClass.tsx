export interface ChangeClassProps {
    name: string;
    className: string;
    changedClassName: string;
}
const ChangeClass = (props: ChangeClassProps) => {
    const targetElement = document.querySelector(props.className);

    if (targetElement) {
        targetElement.className = props.changedClassName;
    } else {
        console.warn(`Target element ${props.name} not found.`);
    }
}

export default ChangeClass;