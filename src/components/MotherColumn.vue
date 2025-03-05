<script setup>
import { useDataStore } from '@/store/dataStore'

const store = useDataStore()
</script>

<template>
  <section class="mother-section">
    <h2 class="section-title">爱心妈妈专栏</h2>
    <div class="mother-grid">
      <div v-for="mother in store.mothers" :key="mother.name" class="mother-card">
        <div class="profile-header">
          <h3>{{ mother.name }}</h3>
          <span class="age">{{ mother.age }}岁</span>
        </div>
        <div class="badges">
          <span v-for="badge in mother.badges" :key="badge" class="badge">
            {{ badge }}
          </span>
        </div>
        <div class="service-info">
          <p>已服务家庭: {{ mother.families }}个</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.mother-section {
  padding: 4rem 5%;
  background: #f8f9fa;

  .section-title {
    text-align: center;
    margin-bottom: 2rem;
    color: #2a7de1;
  }

  .mother-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .mother-card {
    background: white;
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    
    .profile-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
      
      h3 {
        margin: 0;
        font-size: 1.2rem;
      }
      
      .age {
        color: #666;
      }
    }

    .badges {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
      margin-bottom: 1rem;

      .badge {
        background: #e3f2fd;
        color: #1976d2;
        padding: 0.25rem 0.75rem;
        border-radius: 20px;
        font-size: 0.85rem;
      }
    }

    .service-info {
      border-top: 1px solid #eee;
      padding-top: 1rem;
      color: #666;
    }
  }
}
</style>