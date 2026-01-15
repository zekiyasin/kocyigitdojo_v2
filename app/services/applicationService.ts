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
  applicationNumber?: string;
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
        const errorMessage =
          error.response.data.message || "Başvuru gönderilemedi";
        const errorDetails = error.response.data.error || "";

        // TC kimlik numarası duplicate hatası kontrolü
        if (errorDetails.includes("tc_identity_unique")) {
          throw new Error(
            "Bu TC kimlik numarası ile daha önce başvuru yapılmış. Lütfen bizimle iletişime geçin."
          );
        }

        // Email duplicate hatası kontrolü
        if (errorDetails.includes("email_unique")) {
          throw new Error(
            "Bu e-posta adresi ile daha önce başvuru yapılmış. Lütfen farklı bir e-posta kullanın."
          );
        }

        throw new Error(errorMessage);
      }
      throw new Error("Bağlantı hatası. Lütfen tekrar deneyin.");
    }
  }

  /**
   * Check application status by application number
   */
  async checkApplicationStatus(applicationNumber: string): Promise<any> {
    try {
      const response = await apiClient.post("/applications/check-status", {
        applicationNumber,
      });
      return response.data;
    } catch (error: any) {
      throw error;
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
