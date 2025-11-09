import { NextRequest, NextResponse } from "next/server";

const data = [
  {
    id: 1,
    title: "Nike Air Force 1 Gore-Tex",
    price: 2489000,
    image:
      "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/4cde9042-7bbf-4bc3-9870-2891c27e7888/AIR+FORCE+1+GTX.png",
  },
  {
    id: 2,
    title: "Nike Dunk Low Retro LTD HWN",
    price: 2099000,
    image:
      "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/d9eaab9f-5089-47b5-9095-df566497c83e/NIKE+DUNK+LOW+RETRO+LTD+HWN.png",
  },
  {
    id: 3,
    title: "Nike Court Vision Low",
    price: 958000,
    image:
      "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/cea0253b-8ad3-4ba1-9644-c82fddb93aa9/NIKE+COURT+VISION+LO.png",
  },
  {
    id: 4,
    title: "Nike Court Vision Low",
    price: 958000,
    image:
      "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/cea0253b-8ad3-4ba1-9644-c82fddb93aa9/NIKE+COURT+VISION+LO.png",
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
