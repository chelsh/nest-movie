import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAll', () => {
    it('should return an array', () => {
      const result = service.getAll();
      expect(result).toBeInstanceOf(Array);
    });
  });

  describe('getOne', () => {
    it('should return a movie object', () => {
      service.create({
        //getOne 테스트할 때 DB에 해당 데이터가 없으면 문제 발생하므로 test data 추가
        title: 'Test Movie',
        year: 2024,
        genres: ['test', 'lala'],
      });
      const movie = service.getOne(1);
      expect(movie).toBeDefined();
    });
  });
});
