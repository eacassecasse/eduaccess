export default async function Video() {
    // const src = await getVideoSrc()
    const src = "https://www.youtube.com/embed/SKthSVmxAeI"

    return (
        <div className="relative overflow-hidden pb-[56.25%] w-full h-full">
            <iframe
                className="absolute top-0 left-0 w-full h-full rounded-md"
                width="100%"
                height="100%"
                src={src}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="YouTube video"
            />
        </div>
    );
}