

function NotFoundPage() {
	return (
        <div className="flex flex-col items-center justify-center h-screen space-y-4 container mx-auto"> 
            <h1 className="list-none text-3xl light:text-black dark:text-white">Beklager, ingenting her!</h1>
            <p className="light:text-black dark:text-white">Siden her fins ikke!</p>
        </div>
)
}

export default NotFoundPage