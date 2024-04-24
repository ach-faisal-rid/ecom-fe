class AppURL {
  static BaseURL = "http://127.0.0.1:8000/api";
  static VisitorDetails = this.BaseURL + "/get-visitor";
  static PostContact = this.BaseURL + "/post-contact";
  static AllSiteInfo = this.BaseURL + "/all-site-info";
  static AllCategoryDetails = this.BaseURL + "/all-category";
  static AllProductListByRemark(Remark) {
    return this.BaseURL + "/all-product-list-by-remark/" 
    + Remark;
  }
  static AllProductListByCategory(category) {
    return this.BaseURL + "/all-product-list-by-category/" 
    + category;
  }
  static AllProductListBysubcategory(category, subcategory) {
    return this.BaseURL + "/all-product-list-by-subcategory/" 
    + category+"/"+subcategory;
  }
}

export default AppURL;
