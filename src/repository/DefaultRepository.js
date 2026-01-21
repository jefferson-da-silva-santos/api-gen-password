// DefaultRepository.js
import prisma from '../prisma.js';

export class DefaultRepository {
  constructor(model) {
    this.model = model;
  }

  async getAll(params = {}) {
    return this.model.findMany(params);
  }

  async getById(id, params = {}) {
    return this.model.findUnique({
      where: { id },
      ...params,
    });
  }

  async create(data) {
    return this.model.create({ data });
  }

  async update(id, data) {
    return this.model.update({
      where: { id },
      data,
    });
  }

  async delete(id) {
    return this.model.delete({
      where: { id },
    });
  }

  async transaction(callback) {
    return prisma.$transaction(callback);
  }
}
