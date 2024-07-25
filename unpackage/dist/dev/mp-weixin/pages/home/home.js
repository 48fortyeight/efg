"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      //轮播图数据列表
      swiperList: [
        { image_src: "https://mp-8ceddf2a-d6f2-42b9-be7d-a6fbc44ed077.cdn.bspapp.com/swiper1.png", comment_id: 1 },
        { image_src: "https://mp-8ceddf2a-d6f2-42b9-be7d-a6fbc44ed077.cdn.bspapp.com/swiper2.png", comment_id: 2 },
        { image_src: "https://mp-8ceddf2a-d6f2-42b9-be7d-a6fbc44ed077.cdn.bspapp.com/swiper3.png", comment_id: 3 }
      ],
      // 分类导航的数据列表
      navList: [
        { image_src: "https://mp-8ceddf2a-d6f2-42b9-be7d-a6fbc44ed077.cdn.bspapp.com/doahang.png", name: "分类" },
        { image_src: "https://mp-8ceddf2a-d6f2-42b9-be7d-a6fbc44ed077.cdn.bspapp.com/doahang.png", name: "分类" },
        { image_src: "https://mp-8ceddf2a-d6f2-42b9-be7d-a6fbc44ed077.cdn.bspapp.com/doahang.png", name: "分类" }
      ],
      comList: [
        {
          img: "../../static/1.png",
          name: "商品的名称，可以很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长",
          commdityPrice: 100
        },
        {
          img: "http://pic.sc.chinaz.com/Files/pic/pic9/202002/zzpic23327_s.jpg",
          name: "商品名称会在超出两行时候自动折叠",
          commdityPrice: 100
        },
        {
          img: "../../static/tab_icons/home.png",
          name: "只有一行标题时高度为39",
          commdityPrice: 100
        },
        {
          img: "http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg",
          name: "具体样式您可以自定义",
          commdityPrice: 100
        },
        {
          img: "http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg",
          name: "vue的H5页面也是如此使用",
          commdityPrice: 100
        }
      ]
      //商品列表
    };
  },
  onLoad() {
  },
  methods: {
    // nav-item 项被点击时候的事件处理函数
    navClickHandler(item) {
      if (item.name === "分类") {
        common_vendor.index.switchTab({
          url: "/pages/cate/cate"
        });
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.swiperList, (item, index, i0) => {
      return {
        a: item.image_src,
        b: "/subpkg/comment_page/comment_page?comment_id=" + item.comment_id,
        c: index
      };
    }),
    b: common_vendor.f($data.navList, (item, index, i0) => {
      return {
        a: item.image_src,
        b: index,
        c: common_vendor.o(($event) => $options.navClickHandler(item), index)
      };
    }),
    c: common_vendor.f($data.comList, (item, index, i0) => {
      return {
        a: item.img,
        b: common_vendor.t(item.name),
        c: index
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
