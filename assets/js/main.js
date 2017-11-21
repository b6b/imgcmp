var url = new URI(window.location.toString());
var query = url.query(true)

var img1 = query['img1'];
var img2 = query['img2'];

var loadComparison = false;

if (img1 != null && img2 != null) {
  loadComparison = true;
}

new Vue({
  el: '#app',
  data: {
    loadComparison: loadComparison,
    showAlt: false,
    img1: img1,
    img2: img2
  },
  methods: {
    compare: function () {
      if (this.img1 == null || this.img2 == null) {
        alert('Please enter a valid URL for both image fields.');
        return;
      }

      url.addSearch({ img1: this.img1, img2: this.img2 });
      window.location.assign(url.toString())
    }
  }
})