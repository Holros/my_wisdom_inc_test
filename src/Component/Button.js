const Button = ({value, onClick}) => {
    return (
        <div className="text-white px-1 py-2 rounded bg-gray-700 hover:bg-gray-500 font-bold text-center" onClick={onClick}>{value}</div>
    )
}

export default Button