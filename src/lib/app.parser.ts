// app.parser.ts
import { Injectable } from '@nestjs/common'
import { CsvParser } from 'nest-csv-parser'
 
class Entity {
  year : String 
  make : String 
  model : String 
  submodel : String 
  Notes : String 
  pL    : String 
}
 
@Injectable()
export class AppService {
  constructor(
    private readonly csvParser: CsvParser
  ) {}
 
  async parse() {
    // Create stream from file (or get it from S3)
    const stream = fs.createReadStream(__dirname + '/car.csv')
    const entities: Entity[] = await csvParser.parse(stream, Entity)
 
    return entities
  }
}