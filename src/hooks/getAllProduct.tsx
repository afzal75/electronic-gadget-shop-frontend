const getAllProducts = async (query: any) => {
    let url = "https://mobile-gadget-backend.vercel.app/products";
    console.log(url)
    if (Object.entries(query).length > 0) {
        const [[key, value]] = Object.entries(query);
        url = `https://mobile-gadget-backend.vercel.app/products/filter?${key}=${value}`;
    }
    const res = await fetch(url, {
        cache: "no-cache",
    });
    return await res.json();
};

export default getAllProducts;
