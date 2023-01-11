export const Hero = ({textColor = "text-orange-600"}) => {
    return (
        <div className={`inline-flex gap-2 items-center w-full ${textColor}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
            <span className="font-bold text-lg">Appikasi SPPD</span>
        </div>
    )
}