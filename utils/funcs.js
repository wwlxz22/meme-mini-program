const shareTitle = ["你敢挑战我吗？", "拿去，够你用一年的了！", "约吗？大哥（手动滑稽）"]

const shareImage = ["/images/share/share1.jpeg", "/images/share/share2.jpeg", "/images/share/share3.jpeg"]

/**
 * 获取随机的分享标题
 */
const getShareData = () => {
  return {
    title: shareTitle[Math.floor(Math.random() * 3)],
    imageUrl: shareImage[Math.floor(Math.random() * 3)],
    path: "/index/index/index"
  }
}

module.exports = {
  getShareData: getShareData
}