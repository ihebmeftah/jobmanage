import { Injectable } from '@nestjs/common';
import { CreateCandidatureInput } from './dto/create-candidature.input';
import { UpdateCandidatureInput } from './dto/update-candidature.input';

@Injectable()
export class CandidatureService {
  create(createCandidatureInput: CreateCandidatureInput) {
    return 'This action adds a new candidature';
  }

  findAll() {
    return `This action returns all candidature`;
  }

  findOne(id: number) {
    return `This action returns a #${id} candidature`;
  }

  update(id: number, updateCandidatureInput: UpdateCandidatureInput) {
    return `This action updates a #${id} candidature`;
  }

  remove(id: number) {
    return `This action removes a #${id} candidature`;
  }
}
