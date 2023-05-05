const Shimmer = () => {
    return (

        <div className="restraunt-list">
            {
                Array(20).fill(0).map((elem,index) => {
                    return <div className="shimmer-card" index={index}></div>
                })
            }
        </div>

    )
}

export default Shimmer;