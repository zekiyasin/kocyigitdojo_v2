import apiClient from "./api";

export interface ExamRequirement {
  id: string;
  examId: string;
  requirementType:
    | "dachi"
    | "kihon_el"
    | "kihon_blok"
    | "kihon_ayak"
    | "ido_geiko"
    | "kata"
    | "kumite"
    | "kultur_fizik";
  name: string;
  description: string | null;
  details: string | null;
  points: number;
  isMandatory: boolean;
  displayOrder: number;
  createdAt: string;
  updatedAt: string;
}

export interface Exam {
  id: string;
  name: string;
  beltLevel: string;
  beltName: string;
  description: string | null;
  minimumScore: number;
  estimatedDurationMinutes: number;
  isActive: boolean;
  displayOrder: number;
  createdBy: string;
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
 * Group exam requirements by type
 */
export const groupRequirementsByType = (requirements: ExamRequirement[]) => {
  return requirements.reduce(
    (acc, req) => {
      if (!acc[req.requirementType]) {
        acc[req.requirementType] = [];
      }
      acc[req.requirementType].push(req);
      return acc;
    },
    {} as Record<string, ExamRequirement[]>,
  );
};

/**
 * Get requirement type display name in Turkish
 */
export const getRequirementTypeLabel = (type: string): string => {
  const labels: Record<string, string> = {
    dachi: "Duruşlar (Dachi)",
    kihon_el: "Temel El Teknikleri",
    kihon_blok: "Temel Blok Teknikleri",
    kihon_ayak: "Temel Ayak Teknikleri",
    ido_geiko: "Hareket Çalışmaları (Ido Geiko)",
    kata: "Kata",
    kumite: "Kumite",
    kultur_fizik: "Kültür Fizik",
  };
  return labels[type] || type;
};
