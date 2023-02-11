export default function Sum({numbers = [4, 1, 41]}){
    return(
        <h1>
            {numbers.reduce((total, current) => {return (total += current) })}
        </h1>
    )
}