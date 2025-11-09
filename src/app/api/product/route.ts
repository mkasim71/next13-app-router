import { NextRequest, NextResponse } from "next/server";

const data = [
  {
    id: 1,
    name: "Sepatu Baru",
    price: 1000000,
    image:
      "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/4cde9042-7bbf-4bc3-9870-2891c27e7888/AIR+FORCE+1+GTX.png",
  },
  {
    id: 2,
    name: "Sepatu Lari",
    price: 1500000,
    image:
      "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/ac07bbe2-62e0-406f-a6c6-8879ba277d54/NIKE+CORTEZ+SE.png",
  },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (id) {
    const detailProduct = data.find((item) => item.id === parseInt(id));
    if (detailProduct) {
      return NextResponse.json({
        status: 200,
        message: "success",
        data: detailProduct,
      });
    }
    return NextResponse.json({
      status: 404,
      message: "Not Found",
      data: {},
    });
  }

  return NextResponse.json({ status: 200, message: "success", data });
}
