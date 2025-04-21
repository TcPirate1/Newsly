export async function handler(req, res) {
    const query = req.query

    const data = [
        { id: 1, name: "test 1"},
        { id: 2, name: "test 2"},
        { id: 3, name: "test 3"}
    ];

    const filtered = data.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
    
      res.status(200).json(filtered);
}