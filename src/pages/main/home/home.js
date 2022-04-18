import './home.scss'
import { Outlet, Link } from "react-router-dom";

function Home() {
    return (
        <div className="home">
            <div className="content">
                <div className="powered"><p>powered by $GRUV</p></div>
                <div className="prime-text"><h1>Web3 <span>startup accelerator</span>, both in finance and human resource<span>.</span></h1></div>
                <div className="sec-text"><h3>We're looking for web3 contributors who want to make an impact in the web3 space</h3></div>
                <Link to="/join" className="btn">Join DAO</Link>
            </div>
            <div className="illustration">
            <svg viewBox="0 0 536 470" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M41 63L42.2464 70.5668C43.3611 77.3345 48.6655 82.6389 55.4332 83.7536L63 85L55.4332 86.2464C48.6655 87.3611 43.3611 92.6655 42.2464 99.4332L41 107L39.7536 99.4332C38.6389 92.6655 33.3345 87.3611 26.5668 86.2464L19 85L26.5668 83.7536C33.3345 82.6389 38.6389 77.3345 39.7536 70.5668L41 63Z" fill="white"/>
<path d="M524.5 441L525.152 444.955C525.734 448.493 528.507 451.266 532.045 451.848L536 452.5L532.045 453.152C528.507 453.734 525.734 456.507 525.152 460.045L524.5 464L523.848 460.045C523.266 456.507 520.493 453.734 516.955 453.152L513 452.5L516.955 451.848C520.493 451.266 523.266 448.493 523.848 444.955L524.5 441Z" fill="white"/>
<path d="M452.5 85L452.812 86.8917C453.09 88.5836 454.416 89.9097 456.108 90.1884L458 90.5L456.108 90.8116C454.416 91.0903 453.09 92.4164 452.812 94.1083L452.5 96L452.188 94.1083C451.91 92.4164 450.584 91.0903 448.892 90.8116L447 90.5L448.892 90.1884C450.584 89.9097 451.91 88.5836 452.188 86.8917L452.5 85Z" fill="white"/>
<path d="M15 308L15.8498 313.159C16.6099 317.774 20.2265 321.39 24.8408 322.15L30 323L24.8408 323.85C20.2265 324.61 16.6099 328.226 15.8498 332.841L15 338L14.1502 332.841C13.3901 328.226 9.77353 324.61 5.15917 323.85L0 323L5.15917 322.15C9.77353 321.39 13.3901 317.774 14.1502 313.159L15 308Z" fill="white"/>
<path d="M436 304.959C485.619 294.158 519.613 292.567 523.154 302.802C529.113 320.025 446.573 364.218 338.795 401.508C231.017 438.798 138.815 455.065 132.855 437.842C129.167 427.181 159.382 406.19 208.5 382.897" stroke="white"/>
<path d="M353 90.0375C390.057 60.5953 410.973 37.1412 405.604 28.2495C396.184 12.6478 309.402 47.7892 211.773 106.74C114.144 165.691 42.637 226.128 52.0577 241.73C57.9598 251.504 94.2257 241.362 144.5 217.926" stroke="white"/>
<path d="M262.807 166.617L273.494 190.587L273.382 190.682L207.279 139.656L207.166 139.751L254.743 228.873C254.734 228.976 254.63 228.967 254.621 229.066L231.886 218.811L233.554 222.525L247.487 252.482C253.73 265.815 260.477 278.912 267.715 291.743L283.937 317.906C287.463 322.997 291.109 327.899 295.415 332.338C303.36 340.554 312.988 345.946 324.196 348.609C336.427 351.46 348.438 350.717 359.955 345.846C377.171 338.691 388.796 326.269 393.894 308.613C399.113 290.762 395.915 274.155 385.019 258.951C380.922 253.197 375.823 248.284 370.615 243.462C361.339 235.035 351.49 227.274 341.303 219.792L314.728 200.74L279.484 177.192L263.508 166.883L262.915 166.526C262.915 166.526 262.811 166.518 262.802 166.621L262.807 166.617ZM291.572 263.375L257.68 199.694C257.784 199.703 257.793 199.6 257.893 199.608L315.282 244.29L315.395 244.195L308.123 227.863L300.75 211.523C300.946 211.643 301.147 211.76 301.242 211.872C309.877 217.426 318.296 223.302 326.483 229.485C338.03 238.099 349.456 246.912 360.08 256.573C363.444 259.737 366.708 263.004 369.865 266.37C370.821 267.368 371.564 268.45 372.306 269.535C379.531 280.144 381.797 291.666 378.183 303.934C374.298 316.991 365.752 326.092 353.071 331.17C339.316 336.672 326.15 335.072 313.738 326.898C309.209 323.868 305.592 319.893 302.317 315.535C297.077 308.566 292.375 301.334 288.012 293.822C280.437 281.144 273.51 268.209 267.02 255.009C266.578 254.053 266.036 253.088 265.606 252.033L265.719 251.938L291.576 263.371L291.572 263.375Z" fill="#F8FFFA"/>
<path d="M291.572 263.375L265.92 251.959L265.807 252.053L267.221 255.03C273.646 268.262 280.65 281.212 288.213 293.842L302.517 315.555C305.792 319.914 309.41 323.888 313.938 326.919C326.249 335.088 339.516 336.693 353.271 331.191C365.952 326.112 374.607 316.921 378.383 303.954C381.997 291.69 379.732 280.164 372.506 269.556C371.764 268.474 370.929 267.281 370.066 266.39L360.281 256.594C349.661 246.829 338.226 238.12 326.683 229.506C318.462 223.411 310.119 217.513 301.443 211.892C301.347 211.78 301.247 211.772 300.95 211.544L308.323 227.884L315.596 244.216L315.483 244.31L258.094 199.628C257.989 199.62 257.981 199.723 257.88 199.715L291.568 263.379L291.572 263.375Z" fill="#14E956"/>
</svg>
            </div>
        </div>
    )
}

export default Home