class DefaultController {
  constructor(service = null) {
    this.service = service;
  }

  async handle(req, res, data) {
    try {
      const response = await this.service.run();
      return res.status(200).json({
        success: true,
        data: response
      })
    } catch (error) {
      
    }
  }
}

export default DefaultController;