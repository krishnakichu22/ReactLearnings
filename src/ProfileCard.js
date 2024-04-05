function ProfileCard({Title,handle,image,description})
{
    //const title = {props.Title};
    //const handle  = {props.handle};
    //const {Title,handle} = props;
    return (
    <div className = "card">
        <div className="card-image">
            <figure className="image is-1by1">
                <img src={image} alt="pda logo" />
            </figure>
        </div>
    
    <div className="card-content">
        <div className="media-content">
            <p className="title is-4">{Title}</p>
            <p className="subtitle is-6">{handle}</p>
        </div>
        <div className="content">{description}</div>
    </div>   
    </div>
    );
}

export default ProfileCard;



// {/* <img src= {image} alt="pda logo" />
//         <div>Title is : {Title} </div>
//         <div>Handle is :{handle}</div> */}