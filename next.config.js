const isProd = process.env.NODE_ENV === "production"

function getBasePath() {
    let basePath = "";

    if (isProd && process.env.BASE_PATH){
        if (process.env.BASE_PATH.startsWith("/") ){
            basePath = process.env.BASE_PATH;
        } else {
            basePath = "/" + process.env.BASE_PATH;
        }
    }

    console.log("getBasePath() : isProd = " + isProd);
    console.log("getBasePath() : basePath = " + basePath);

    return basePath
}

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: getBasePath(),
    images: {
        unoptimized: true,
    }
}

module.exports = nextConfig
