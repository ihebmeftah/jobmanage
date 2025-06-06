import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CandidatureService } from './candidature.service';
import { Candidature } from './entities/candidature.entity';
import { CreateCandidatureInput } from './dto/create-candidature.input';
import { UpdateCandidatureInput } from './dto/update-candidature.input';

@Resolver(() => Candidature)
export class CandidatureResolver {
  constructor(private readonly candidatureService: CandidatureService) {}

  @Mutation(() => Candidature)
  createCandidature(@Args('createCandidatureInput') createCandidatureInput: CreateCandidatureInput) {
    return this.candidatureService.create(createCandidatureInput);
  }

  @Query(() => [Candidature], { name: 'candidature' })
  findAll() {
    return this.candidatureService.findAll();
  }

  @Query(() => Candidature, { name: 'candidature' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.candidatureService.findOne(id);
  }

  @Mutation(() => Candidature)
  updateCandidature(@Args('updateCandidatureInput') updateCandidatureInput: UpdateCandidatureInput) {
    return this.candidatureService.update(updateCandidatureInput.id, updateCandidatureInput);
  }

  @Mutation(() => Candidature)
  removeCandidature(@Args('id', { type: () => Int }) id: number) {
    return this.candidatureService.remove(id);
  }
}
