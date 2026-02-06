import apiClient from './api';

export interface Kata {
  id: string;
  name: string;
  japaneseName: string | null;
  description: string;
  japaneseDescription: string | null;
  style: string;
  kataType: string;
  difficultyLevel: string;
  minimumBeltLevel: string;
  recommendedBeltLevel: string | null;
  estimatedDuration: number | null;
  numberOfMoves: number | null;
  keyTechniques: string[];
  stances: string[];
  videoType: 'youtube' | 'minio';
  videoUrl: string | null;
  videoThumbnailUrl: string | null;
  videoDuration: number | null;
  diagrams: string[];
  notes: string | null;
  commonMistakes: string | null;
  trainingTips: string | null;
  isActive: boolean;
  isFeatured: boolean;
  displayOrder: number;
  createdAt: string;
  updatedAt: string;
}

export interface KataListResponse {
  message: string;
  data: {
    meta: {
      total: number;
      per_page: number;
      current_page: number;
      last_page: number;
      first_page: number;
      first_page_url: string;
      last_page_url: string;
      next_page_url: string | null;
      previous_page_url: string | null;
    };
    data: Kata[];
  };
}

export interface KataDetailResponse {
  message: string;
  data: Kata;
}

export interface KataFilters {
  page?: number;
  limit?: number;
  style?: string;
  difficulty_level?: string;
  kata_type?: string;
  search?: string;
  competition_only?: boolean;
}

class KataService {
  /**
   * Get all katas with filters
   */
  async getAll(filters?: KataFilters): Promise<KataListResponse> {
    try {
      const params = new URLSearchParams();
      
      if (filters?.page) params.append('page', filters.page.toString());
      if (filters?.limit) params.append('limit', filters.limit.toString());
      if (filters?.style) params.append('style', filters.style);
      if (filters?.difficulty_level) params.append('difficulty_level', filters.difficulty_level);
      if (filters?.kata_type) params.append('kata_type', filters.kata_type);
      if (filters?.search) params.append('search', filters.search);
      if (filters?.competition_only) params.append('competition_only', 'true');

      const queryString = params.toString();
      const url = `/katas${queryString ? `?${queryString}` : ''}`;
      
      const response = await apiClient.get<KataListResponse>(url);
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Katalar yüklenemedi');
    }
  }

  /**
   * Get single kata by ID
   */
  async getById(id: string): Promise<KataDetailResponse> {
    try {
      const response = await apiClient.get<KataDetailResponse>(`/katas/${id}`);
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Kata detayı yüklenemedi');
    }
  }

  /**
   * Get kata styles
   */
  async getStyles(): Promise<{ message: string; data: string[] }> {
    try {
      const response = await apiClient.get('/katas/styles');
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Kata stilleri yüklenemedi');
    }
  }

  /**
   * Get katas by belt level
   */
  async getByBeltLevel(beltLevel: string): Promise<KataListResponse> {
    try {
      const response = await apiClient.get<KataListResponse>(`/katas/belt-level/${beltLevel}`);
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Kuşak seviyesi kataları yüklenemedi');
    }
  }
}

export const kataService = new KataService();
export default kataService;
