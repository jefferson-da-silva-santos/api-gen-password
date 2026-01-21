const error =(error, req, res) => {
  return res.status(error.status || 500).json({
    success: false,
    error: error.message
  })
}

export default error;