// students.service.ts — NestJS Service (PLACEHOLDER)
//
// Contains business logic for Student CRUD using TypeORM. NOT implemented.

/*
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './students.entity';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private readonly repo: Repository<Student>,
  ) {}

  findAll(): Promise<Student[]> {
    return this.repo.find();
  }

  create(dto: CreateStudentDto): Promise<Student> {
    const student = this.repo.create(dto);
    return this.repo.save(student);
  }

  async update(id: number, dto: UpdateStudentDto): Promise<Student> {
    const student = await this.repo.findOneBy({ id });
    if (!student) throw new NotFoundException(`Student #${id} not found`);
    Object.assign(student, dto);
    return this.repo.save(student);
  }

  async remove(id: number): Promise<void> {
    const student = await this.repo.findOneBy({ id });
    if (!student) throw new NotFoundException(`Student #${id} not found`);
    await this.repo.remove(student);
  }
}
*/

export { };
