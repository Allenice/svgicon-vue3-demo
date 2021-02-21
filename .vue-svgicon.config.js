const path = require('path')
const svgFilePaths = ["./src/assets/svgicon"].map((v) => path.resolve(v))
const tagName = 'icon'

module.exports = {
    tagName,
    svgFilePath: svgFilePaths,
    svgoConfig: {},
    pathAlias: {
        "@icon": svgFilePaths[0]
    },
    transformAssetUrls: {
        [tagName]: ['data'],
        video: ['src', 'poster'],
        source: 'src',
        img: 'src',
        image: ['xlink:href', 'href'],
        use: ['xlink:href', 'href']
    },
}
