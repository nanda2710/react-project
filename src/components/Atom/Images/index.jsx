function Images(props) {
    return (
        <img
        className={props.typeclass}
        src={props.slideimage}
        alt={props.alternativetext}
      />
    )
}

export default Images;