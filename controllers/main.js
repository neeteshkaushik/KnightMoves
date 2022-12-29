const validPositions = async (req, res) => {
  let { x, y } = req.query;
  x = Number(x);
  y = Number(y);
  if (!x || !y || typeof x === NaN || x < 1 || x > 8 || y < 1 || y > 8) {
    return res.status(400).json({ msg: "please provide a valid position" });
  }
  const X = [2, 1, -1, -2, -2, -1, 1, 2];
  const Y = [1, 2, 2, 1, -1, -2, -2, -1];
  const pos = [];
  for (let i = 0; i < X.length; i++) {
    let _x = x + X[i];
    let _y = y + Y[i];
    if (_x >= 1 && _x <= 8 && _y >= 1 && _y <= 8) {
      pos.push({ x: _x, y: _y });
    }
  }
  res.status(200).json({ pos });
};

module.exports = validPositions;
