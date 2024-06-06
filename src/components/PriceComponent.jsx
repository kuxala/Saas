import Wrapper from "../wrappers/PriceContainerWrapper";

export default function PriceComponent({
  firstP,
  price,
  buttonText,
  l1,
  l2,
  l3,
  l4,
  l5,
  l6,
  l7,
  l8,
  l9,
  l10,
  l11,
  bg,
  color,
}) {
  return (
    <Wrapper>
      <div className="container" style={{ backgroundColor: bg, color: color }}>
        <p style={{ backgroundColor: bg, color: color }}> {firstP}</p>
        <h3 style={{ backgroundColor: bg, color: color }}>
          ${price}
          <span>/monthly</span>
        </h3>
        <button style={{ backgroundColor: color, color: bg }}>
          {buttonText}
        </button>
        <div>
          <ul>
            <li style={{ backgroundColor: bg, color: color }}>
              {bg ? (
                <img src="./assets/whitecheck.svg" />
              ) : (
                <img src="./assets/check.svg" />
              )}
              {l1}
            </li>
            <li style={{ backgroundColor: bg, color: color }}>
              {bg ? (
                <img src="./assets/whitecheck.svg" />
              ) : (
                <img src="./assets/check.svg" />
              )}
              {l2}
            </li>
            <li style={{ backgroundColor: bg, color: color }}>
              {bg ? (
                <img src="./assets/whitecheck.svg" />
              ) : (
                <img src="./assets/check.svg" />
              )}
              {l3}
            </li>
            <li style={{ backgroundColor: bg, color: color }}>
              {bg ? (
                <img src="./assets/whitecheck.svg" />
              ) : (
                <img src="./assets/check.svg" />
              )}
              {l4}
            </li>
            <li style={{ backgroundColor: bg, color: color }}>
              {bg ? (
                <img src="./assets/whitecheck.svg" />
              ) : (
                <img src="./assets/check.svg" />
              )}
              {l5}
            </li>
            {l6 && (
              <li style={{ backgroundColor: bg, color: color }}>
                {bg ? (
                  <img src="./assets/whitecheck.svg" />
                ) : (
                  <img src="./assets/check.svg" />
                )}
                {l6}
              </li>
            )}
            {l7 && (
              <li style={{ backgroundColor: bg, color: color }}>
                {bg ? (
                  <img src="./assets/whitecheck.svg" />
                ) : (
                  <img src="./assets/check.svg" />
                )}
                {l7}
              </li>
            )}
            {l8 && (
              <li style={{ backgroundColor: bg, color: color }}>
                <img src="./assets/check.svg" />
                {l8}
              </li>
            )}
            {l9 && (
              <li style={{ backgroundColor: bg, color: color }}>
                <img src="./assets/check.svg" />
                {l9}
              </li>
            )}
          </ul>
        </div>
      </div>
    </Wrapper>
  );
}
