import apiClient from "./api";

export interface AthleteApplicationData {
  fullName: string;
  email: string;
  phone: string;
  birthDate: string;
  birthPlace: string;
  tcIdentity: string;
  gender: string;
  address: string;
  city: string;
  district: string;
  postalCode: string;
  motherName: string;
  motherPhone: string;
  fatherName: string;
  fatherPhone: string;
  guardianEmail: string;
  emergencyContactName: string;
  emergencyContactPhone: string;
  emergencyContactRelation: string;
  bloodType: string;
  allergies: string;
  healthConditions: string;
  medications: string;
  hasPreviousExperience: boolean;
  previousClub?: string;
  previousExperienceDetails?: string;
  notes?: string;
}

export interface AthleteApplicationResponse {
  message: string;
  data?: any;
}

class ApplicationService {
  /**
   * Submit athlete application
   */
  async submitApplication(
    data: AthleteApplicationData
  ): Promise<AthleteApplicationResponse> {
    try {
      const response = await apiClient.post<AthleteApplicationResponse>(
        "/applications",
        data
      );
      return response.data;
    } catch (error: any) {
      if (error.response?.data) {
        throw new Error(error.response.data.message || "Başvuru gönderilemedi");
      }
      throw new Error("Bağlantı hatası. Lütfen tekrar deneyin.");
    }
  }

  /**
   * Get application status (if needed in the future)
   */
  async getApplicationStatus(applicationId: string): Promise<any> {
    try {
      const response = await apiClient.get(`/applications/${applicationId}`);
      return response.data;
    } catch (error: any) {
      throw new Error(
        error.response?.data?.message || "Başvuru bilgisi alınamadı"
      );
    }
  }
}

export const applicationService = new ApplicationService();
export default applicationService;
