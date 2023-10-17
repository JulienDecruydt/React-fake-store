export default function Button({ buttonText, isFullWidth, onClick }) {
    return (
        <button className={
                "bg-white hover:bg-gray-200 hover:text-blue-500 text-black font-bold text-sm py-2 px-4 rounded" +
                (isFullWidth ? " w-full" : "")
            }
            onClick={onClick}
        >
            {buttonText}
        </button>
    )
}