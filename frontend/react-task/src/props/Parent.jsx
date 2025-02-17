import Child from "./Child";

const Parent = () => {
    const name = "nagasundharam";
    const dep = 'CSE';
    return ( <>
    <Child name = {name} dep = {dep} /></> );
}
 
export default Parent;