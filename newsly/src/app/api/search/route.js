export async function GET(request) {
    const {searchParams} = new URL(request.url);
    const query = searchParams.get("query") || "";

    const data = [
      { id: 1, title: "test 1", link: "des 1" },
      { id: 2, title: "test 2", link: "des 2" },
      { id: 3, title: "test 3", link: "des 3" },
    ];

    const filtered = data.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()));

    return new Response(JSON.stringify(filtered), {
        headers: {"Content-Type": "application/json"},
    },);
}