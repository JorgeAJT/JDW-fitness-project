import React from 'react';
import PropTypes from 'prop-types';
import defaultImg from "/workspaces/JDW-fitness-final-project/src/front/img/default-image.jpg";

const ProfileImage = ({ photoUrl, altText = "Profile Image", className = "img-thumbnail", style = {}, sizeClass = "" }) => {
    const defaultStyle = {
        borderRadius: "50%",
        objectFit: "cover",
        border: "0px"
    };

    return (
        <div className={`${sizeClass}`}>
            {photoUrl ? (
                <img src={photoUrl} alt={altText} className={`${className}`} style={{ ...defaultStyle, ...style }} />
            ) : (
                <div className={`${className}`} style={{ ...defaultStyle, ...style }}>
                    <img src={defaultImg} alt={altText} style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover" }} />
                </div>
            )}
        </div>
    );
};

ProfileImage.propTypes = {
    photoUrl: PropTypes.string,
    altText: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    sizeClass: PropTypes.string
};

export default ProfileImage;
