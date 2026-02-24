import apiClient from "./api";

export interface ExamRequirementItem {
  id: number;
  examRequirementId: number;
  name: string;
  description: string | null;
  displayOrder: number;
  createdAt: string;
  updatedAt: string;
}

export interface ExamRequirement {
  id: number;
  examId: number;
  requirementType: string | null;
  name: string;
  description: string | null;
  details: Record<string, unknown> | null;
  points: number;
  isMandatory: boolean;
  displayOrder: number;
  createdAt: string;
  updatedAt: string;
  items: ExamRequirementItem[];
}

export interface Exam {
  id: number;
  name: string;
  beltLevel: string;
  beltName: string;
  description: string | null;
  totalScore: number;
  bonusScore: number;
  passingScore: number;
  minimumScore: number;
  estimatedDurationMinutes: number;
  isActive: boolean;
  displayOrder: number;
  createdBy: number;
  createdAt: string;
  updatedAt: string;
  requirements: ExamRequirement[];
}

export interface ExamsResponse {
  data: {
    meta: {
      total: number;
      perPage: number;
      currentPage: number;
      lastPage: number;
      firstPage: number;
      firstPageUrl: string;
      lastPageUrl: string;
      nextPageUrl: string | null;
      previousPageUrl: string | null;
    };
    data: Exam[];
  };
}

/**
 * Get all exams
 * Public endpoint - no authentication required
 */
export const getAllExams = async (): Promise<Exam[]> => {
  const response = await apiClient.get<ExamsResponse>("/exams");
  return response.data.data.data;
};

/**
 * Get a specific exam by belt level
 * @param beltLevel - Belt level (e.g., '10_kyu', '9_kyu', etc.)
 */
export const getExamByBeltLevel = async (
  beltLevel: string,
): Promise<Exam | null> => {
  const response = await apiClient.get<ExamsResponse>("/exams", {
    params: { beltLevel },
  });
  return response.data.data.data[0] || null;
};

/**
 * Get a specific exam by ID
 * @param id - Exam ID
 */
export const getExamById = async (id: string): Promise<Exam> => {
  const response = await apiClient.get<{ data: Exam }>(`/exams/${id}`);
  return response.data.data;
};

/**
 * Get sorted requirements by display order
 */
export const getSortedRequirements = (
  requirements: ExamRequirement[],
): ExamRequirement[] => {
  return [...requirements].sort((a, b) => a.displayOrder - b.displayOrder);
};
