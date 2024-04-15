
export const Section = (
    {
        title,
        description,
        children
    }: {
        title: string
        description: string
        children: React.ReactNode
    }
) => {
    return (
        <div>
            {/* Section Heading */}
            <h2 className="text-lg font-bold text-gray-800">
                {title}
            </h2>
            {/* Section Description */}
            <p className="mt-1 text-gray-600">
                {description}
            </p>
            {/* Section Preview area */}
            <div className="mt-3">
                <div className="flex flex-col rounded-xl border p-6 shadow-sm">
                    <div className="flex flex-wrap gap-2">
                        {/* previewed stuff aka components */}
                        {children}
                    </div>


                </div>
            </div>
        </div>
    )
}