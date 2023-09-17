export default function Orders() {
  return (
    <main className="p-4 flex flex-col gap-4 bg-white-color w-full outline outline-1 outline-grey-color">
      <table className="table-auto">
        <thead className="bg-background-lght-grey-color">
          <tr className="p-2">
            <th className="text-text-grey-color text-start p-2">سفارش</th>
            <th className="text-text-grey-color text-start p-2">تعداد کالا</th>
            <th className="text-text-grey-color text-start p-2">ارسال به</th>
            <th className="text-text-grey-color text-start p-2">تخفیف</th>
            <th className="text-text-grey-color text-start p-2">کل مبلغ</th>
            <th className="text-text-grey-color text-start p-2">وضعیت</th>
          </tr>
        </thead>

        <tbody>
          <tr className=" hover:bg-background-lght-grey-color">
            <td className="p-3 text-sm text-text-grey-color text-start">
              md1258
            </td>
            <td className="p-3 text-sm text-text-grey-color text-start">3</td>
            <td className="p-3 text-sm text-text-grey-color text-start">
              اهواز، گلستان
            </td>
            <td className="p-3 text-sm text-text-grey-color text-start">
              70.000
            </td>
            <td className="p-3 text-sm text-text-grey-color text-start">
              1.256.000
            </td>
            <td className="p-3 text-sm text-primary-color text-start">
              تحویل شده
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}
