export interface IncidentUpdate {
    id: string;
    incident_id: string;
    status: string;
    body: string;
    created_at: string;
    display_at: string;
    updated_at: string;
  }
  
  export interface Incident {
    id: string;
    name: string;
    impact: string;
    status: string;
    created_at: string;
    updated_at: string;
    resolved_at: string | null;
    shortlink: string;
    monitoring_at: string | null;
    page_id: string;
    incident_updates: IncidentUpdate[];
  }
  