import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class ProductService {
  constructor(
    @Inject('SUPABASE_CLIENT')
    private readonly supabase: SupabaseClient,
  ) {}

  async getAllProducts() {
    const { data, error } = await this.supabase.from('products').select('*');
    if (!data) throw new NotFoundException('No products found');

    if (error) throw new BadRequestException('Error fetching products', error);

    return data;
  }
}
